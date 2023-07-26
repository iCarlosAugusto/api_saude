import admin  from "firebase-admin";

export async function sendNotification() {
  console.log("Sending....")
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: "firebase-adminsdk-715uw@push-saude-club.iam.gserviceaccount.com",
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDQCMndfLr4ZiLt\nKN/NOA04N8yQ4f0e/qYp4lCPqzOqlq/Vg6DA4PIKNNwB1FT7mEOqcza/HplaCxNu\nwHa2j8UiUFj5sHMucakK8P/ndaPQuQBhQceBT7QsKZQzt5iXpbIvnkrZSOedkbrB\nmUNvCX82wkspNZgQQrcCWYqK38Gs7IdAWRNnAkBepZZU7vxgmKzQPgUDaB9tBARN\naju7ZuWHoY7CKEBOBh/daCsS9pgB3wPJRqgm3kUzRbZnkOlHBpJ4eg8QIAq7hvEn\nJ+pyWPQeQ/l6gZRSdolSQw8eZQ7SIY1xyg+saPxT/o5kyBwxd7RzMFnLecQDjXGn\ntNWtq6fNAgMBAAECggEAA8ssWIxP9zT+fvH+iem6bOAF1vkysyPGG/Hd6qt0H/fO\nnCsMi9tx1Zslm32Zic0B61QIUG92243x7huMY/xTMN1xyQoWQWdz3+3e7pIPEHmP\nL8UR+zBc5ohg6GCHY9VzCQ+16UTn9+yEZnKB79sYespEsfJaeVFv6V4rUCiP+5e1\nFeq3iUR+ER1tFyfSC/9U4dVQzQXxdiuNmRNaM4p4jQaEyAxinYcb/2TS9KSuKl2N\nrBJPy0CNZBxnH6jNW5aJ4tFoyz42P89mpBZ+ldBn3HNLO/MpW0BDZTFLOhmsqkq0\nCZTdKt5EQO5Fhcm8oh1o8U3RzXo2fbltD5q6ib45cQKBgQDtaX6OXTuJLlroXXE1\nZmEmcrXAfV+R1H+mII3tXExrQK7lKFsz8LcZIrwtLSRzfk9rAs9w8sBcZVSFrr/+\n/5Z2MPCg9UWh+51prbr/PSiOllTaTsdSuY56VQFdl6v3ajY8SBtw1iP8SfHsBKdw\nBeHul1ldZIVDVbh4B1ljMlkIBwKBgQDgUngN8WXxG73If7i8Wo1mUXJgxhaWPCS9\nJeXKd53u0WGpn0Nix5D16c/Cv4g8I18JDUzIuBa6A1jvTetaoTx7AEkn/b5isxZS\nFHUzNck4B/jmZs+uwQVKRjmC6VmtW3zb6EZze2CC7Kl6kWksoWOc0PdbFsqGZ5cR\nZZEomT5UiwKBgF+RILWUCBwvgb6ZprGVNbQxZsJGdYsRXBT2c8tBZS2jSwPJ2/Sr\niDjhB5iz3EF1beiop/JSdWZ8D6sEbhrqrZmEF8jjEpWi4HmiymxmJQZIs31xSsEd\nGqJZx4PyQvIEWjKn4Avq129+IJkeQnxQkeLmH739cbtqLSh75NqOcNJPAoGAF9ms\n2g6ogBIrA35Q7fXSwuY1+wQUsrSCU3oMDJLbP+ETOS2txHrjdsH9TP+ARKSeHiBD\n4bNw9yYT9p2aQHCUNZ+6J35bF7Ni1CdIrsExO7vdQuH7guES5urAgqK83im0BM2V\ncAHWKRVwj4+WVyBxruKo6g5qShAJh9f8rwxcDDECgYApc9KWWGb5OuYX+T4TKjqg\nijtvelGsT0732oPhQpOMCFg0zFyT+AnqG+ur1GzSUM24G4T6eq25x1sgwuCwe8AD\nFaiA5fZrgNQ/0bhDTFp7SGNr6CuPVlwSq1qjnHbtQInHOooh0Gdv7hz8b9J6Maxw\n5wgF6waC4D/pNbjUM0M/bw==\n-----END PRIVATE KEY-----\n',
      projectId: 'push-saude-club'
    })
  });
  await admin.messaging().send({
    data: {
      title: "Teste 2",
      message: "Teste Saude Club"
    },
    android: {
      priority: "high"
    },
    
    token: 'fjFbi-dMSo67wcHfBVj2Bk:APA91bHNblKjwhPPlVcJoIB_cCiCAMY_QV9msBPSPTcS0WlvG6Bybi-TfFw2CuCF3btOkOOILvztt7Vm8UyIF08kqNTd9tGG6jXAyvG0D_PfVv1CJFD9s_tM-EodMoJXfNy_WAIxeBX_',
  }).then((response) => {
    console.log("Sucess!!!", response);
  }).catch((error) => {
    console.log("Error!!", error);
  });
}
