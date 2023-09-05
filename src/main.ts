import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { initializeApp } from 'firebase-admin/app';
import * as admin from "firebase-admin";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  initializeApp({
    credential: admin.credential.cert({
      clientEmail: "firebase-adminsdk-715uw@push-saude-club.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD0BOkWz0xdErC8\n6WRJG+HMRxf7aF4a+YEaN9O1JIqsRob+PTogx6Ox0UDRTJ5fwwjfOFr1w8atPpVc\nbUWujQeG3G9n6UfKWneu56UJtxkfBkecz4J1t6EMZXIyZDBLz/IcvHExzw3rgeCE\nQl5Xo+pC/1JfFWOPut9ncFAbtiW/kqbcb0si6TQis9Px2ezoPNyMy1LUtISHmWAC\n6u4ZCq6P+pkSr91MdN+C1SjC+/j1I1uUK1b7h9tAXegUrkwPuJB8eMgmxyG1wG5I\nXGsRkdHy2FqQBUhhUu5G4fBnMYoCSRR4jn77AbOwJH0OWk/e66h+JA9KcGNBKVzV\nihraV937AgMBAAECggEACEC8Q2W6bvFpYdJA7ooPXnHPGVUjzaS/nYvi0J8OQ5pV\nCXc3ppEp86MgnpOJTbLSc3478VDwQL67nXcioq8pYIHHEMweffUGVDeIaOY05sw3\nEtIf1uxheYJa1OJ3kbDUPu2OpIEctujbF44JE8y66Q4qkoWuKtfGo4B0bSOBblOu\nAYDf76nQxh3G0GAhFCrGe2KTyMXoTP+ja/raW+8beZg7XxXajkHJ0GrNyLjL1VvM\no61ZftkQzajMv+e06395YdOvYhyas/fKMwXJ/jZUH+O0efyf3RaJ6NLb5WTfB3xl\ny0vGUpbAmdELtwoS03kik3+9H5JT13INEPG6lLJ6lQKBgQD9zSdBXpHqEWKhsXOH\naW3ryNnN6Z5XFnE5QPooUyT0j4ajuSoKC9RtcZugZKmnDSewjsiOF7SdaYImsEFT\nT6d3lSiswtTWHRzN7cH/ZVVzkHUVA1yeQgAPcBouktMAs+7/lF8AqYgR1kVGh7DC\n76tsqq87Xp0YNI2DbpcPXMNyVwKBgQD2IhBCh49tphJud0SPniAAoLW60KxflCja\nhACOeXEkd5CMRKZDgM22XDoHeGop7Rt84e3wbMxLU5Vtk0PRKzPvAECp8AvXdIwL\nrDQWjRJ2RGDN0HG0fhnB3XK5xfWAFTBplhnwgNIGCX9nfLI6dsqm0aE48hFiDzhK\nAz22B/BS/QKBgQDT6TednRi4F0wDNecAaUceV9WD2Ewc6uAereIxSTrR+ASzLyeq\nu7Xiq7kFcwc0NAevo4hRG/nydOX257OjnB53+lK77PFI1YX3a01PsYxnsXYQ1X2/\npdvnB/LUcEM9kv865udr5iF2wzGUcjdkjDjVwq4NJDKGw1plIzF94jZOgQKBgQDf\nkq2GYTCtfu67HOdQNWgIafLpUOdiomhBpSoEQNe/MkRAxZLpOjSh80BazMxSbShM\n1cSWYZ1oxvGy6NPvSfkQngAe3QdEnH8hkzh1S4t7lj0AdtjyBKFM8eRmTyTjRVwG\nbOv/BGTCSxpJXIFgjcsioMR7v5Z+piiRQkRp9ugb2QKBgQDvCrdYewJpaqvzcO5s\nPCt5syKUy6D76tkKIK5RBiCu1C34avWBY6JpnDo/Zcnb5DGXig12aadmmP410gR2\nbkBrw6/LBB9v+b0HEwSK9gAkfq1mOHe3xcq2ua7mO7+1zjhfOPQtrRlCLPflTnt8\nGxQNFEG6f4D31NZwsjI0uWMWSw==\n-----END PRIVATE KEY-----\n",
      projectId: "push-saude-club"
    }),
    storageBucket: "gs://push-saude-club.appspot.com"
  });
  const port = process.env.PORT || 3000;
  console.log("######################################################################A PORTA É :", port)
  await app.listen(port, "0.0.0.0");
}
bootstrap();
