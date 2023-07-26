import { HttpException, Injectable } from '@nestjs/common';
import { BookClassInput } from 'src/api/classes/dtos/book-class.input';
import { CancelClientClassInput } from 'src/api/classes/dtos/cancel-client-class.input';
import { CreateClassInput } from 'src/api/classes/dtos/create-class.input';
import { DeleteClassInput } from 'src/api/classes/dtos/delete-class.input';
import { FindAllClassesInput } from 'src/api/classes/dtos/find-all-classes.input';
import { FindAllClassesByDateInput } from 'src/api/classes/dtos/find-classes_by_date.input';
import { FindNextClientClassInput } from 'src/api/classes/dtos/find-next-client-class.input';
import { UpdateClassInput } from 'src/api/classes/dtos/update-class.input';
import { PrismaService } from 'src/api/users/services/prima.service';

@Injectable()
export class ClassRepository {
  constructor(private prisma: PrismaService) {}

  async createClass({
    name,
    lots,
    startAt,
    companyId,
    address,
    description,
    place,
    bannerImage,
    teacherName,
    dateTimestamp,
    date,
  }: CreateClassInput) {
    return this.prisma.class.create({
      data: {
        name,
        lots,
        startAt,
        address,
        description,
        place,
        companyId,
        bannerImage,
        teacherName,
        dateTimestamp,
        date,
      },
    });
  }

  async update(data: UpdateClassInput) {
    const { classId, ...rest } = data;
    return await this.prisma.class.update({
      where: {
        id: classId,
      },
      data: { ...rest },
    });
  }

  async delete({ classId }: DeleteClassInput) {
    await this.prisma.class.delete({
      where: {
        id: classId,
      },
      select: {
        clients: true,
      },
    });
  }

  async findClassById(id: string) {
    return await this.prisma.class.findUnique({
      where: {
        id,
      },
    });
  }

  async findAllClasses({
    companyId,
    date,
    clientIdentification,
    bookedClasses,
  }: FindAllClassesInput) {
    if (clientIdentification) {
      const classes = await this.prisma.class.findMany({
        where: {
          companyId,
          date,
          clients: {
            some: {
              identification: clientIdentification,
            },
          },
        },
        include: {
          clients: true,
        },
      });

      if (bookedClasses) {
        const classesBooked = classes.filter(
          (classesFilted) => classesFilted.clients.length > 0,
        );
        return classesBooked;
      }

      return classes;
    }

    const classes = await this.prisma.class.findMany({
      where: {
        companyId,
        date,
      },
      include: {
        clients: true,
      },
    });

    if (bookedClasses) {
      const classesBooked = classes.filter(
        (classesFilted) => classesFilted.clients.length > 0,
      );
      return classesBooked;
    }

    return classes;
  }

  async findAllClassesByDate({ companyId, date }: FindAllClassesByDateInput) {
    return this.prisma.class.findMany({
      where: {
        companyId,
        date,
      },
      include: {
        clients: true
      }
    });
  }

  async bookClass({ classId, clientId }: BookClassInput) {
    const isClassAlreadyBooked = await this.prisma.class.findFirst({
      where: {
        id: classId,
        clients: {
          some: {
            id: clientId,
          },
        },
      },
    });
    if (isClassAlreadyBooked) throw new HttpException('Aula já agendada', 404);

    return await this.prisma.class.update({
      where: {
        id: classId,
      },
      data: {
        lots: {
          decrement: 1,
        },
        clients: {
          connect: {
            id: clientId,
          },
        },
      },
    });
  }

  async findNextClientClass({ clientId }: FindNextClientClassInput) {
    var classes = await this.prisma.class.findMany({
      where: {
        clients: {
          some: {
            id: clientId,
          },
        },
      },
    });
    if (classes.length == 0) {
      return null;
    }

    const nextClass = classes.reduce((menor, atual) => {
      if (parseInt(atual.dateTimestamp) < parseInt(menor.dateTimestamp)) {
        return atual;
      } else {
        return menor;
      }
    });
    return nextClass;
  }

  async cancelClass({ classId, clientId }: CancelClientClassInput) {
    await this.prisma.client.update({
      where: {
        id: clientId,
      },
      data: {
        classes: {
          disconnect: [
            {
              id: classId,
            },
          ],
        },
      },
      select: {
        classes: true,
      },
    });
    await this.prisma.class.update({
      where: {
        id: classId,
      },
      data: {
        lots: {
          increment: 1,
        },
      },
    });
    return 'Aula cancelada com sucesso!';
  }

  async findClientsOnClass(classId: string) {
    const clients = await this.prisma.class.findMany({
      where: {
        id: classId,
      },
      include: {
        clients: true,
      },

    });
    return clients[0].clients;
  }
}
