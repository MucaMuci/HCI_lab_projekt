import admin from "firebase-admin";

export const verifyIdToken = (token) => {
    const firebasePrivateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDKEYbHLrBI3phy\nXM95TJAm3Gkm/gdxYQd4weGFbkNaG+jTJnDO616jNPXr90UPikG1O7LNw6YAznwu\nib4k9UJMJvrn6vEE9P/ErPSMNIakXCy0gSDQFm49Z3rG8rS3Y5NXsZUXhVK3N8Ps\nVxlOKYktpo0stOJwy5jX6Ea8w49/X1OIbJa/nXwsI8Dvw3Zqr+/h1URHDs9dTVXs\nJS7yjBFSeWouKOf3ErndeD3Q3B/+5sy2Hyg73U6SmLjhuOIXGTDznFJ/63ID1itW\nbOYBEt15Cud0vnMIz/iJKR9+gXiqJKyjwL/l/lhdap8mKOf50sjXWOJJ9cV88Ipq\nPz7EluRVAgMBAAECggEACtkVXDzEbVUN6BiAHD9LqdpsBrzdLMK3F6OI9j8s0c9C\nbjuCaN637kPEmWNlS2fyY8a4WwA65DuG7SoAkZQHzXYg7YcZDgQSdb43RA5PKs8L\n/gYZ+zHeaeDT9Y7yvA8AylTCmp2nYCYCmFM2DOfWm83KMcaQNYVTR5wKWCNDi+SQ\nyIqDUKrqIiYlj/65hLv2sXDkG/XU0crwTefrcOPnbkhKSZ4JEzeWqFf8fY8tEEax\nWnAfcMetgjsctaxLIMO7tGu86KO/EGwlG6Qw3ClK0seQlQa739H7eZ1wu9OFrEf0\nM/7axVDTHozbdJaDZUYfaiaWeKxoyd3fhOx3BfpWDQKBgQDspVkUy7k5sIDYQSf5\nJQBwHOmiRDrFVfw3JB3Oz/VNiz4pH3UD/0PmWWzYPRRv269p2DZ2plFidpNQvqdf\n28ntt8Mv1a08HJE5knv7ITgqw65ZcuuW8Du/to/jMedKqQmMAJIQExNXYCzZmnVy\n8mEYqBVwRRYlliew3l6h4MQdywKBgQDamDs4w/k0jnxLHkzL6yKHTpd0vWTHPIX2\nYrpquUDbukBtYETzhUf7znUI3QbfZlg6jB1I9bqdREL95XBhVtLavJquju8Xc9Rq\niojbIdzCwmHEagUMXpYRakOw3k0Wtev3h95HIbMp+a18GMOWUigsS9WaSSgu1X3s\n9tzPEDTCXwKBgHb7X8Gz+IpH81BH2khLUWANOW7rrT0A0ZIL56zPJH/7jaJxfY0n\n8ETGG5LRiw/+vcCTBDc9wlemVMVZRqBMysdqCIppffNmTaJLw2htuGbQAj5ZKJi4\nauImcUwDEE6alQE+XDIW1TeuVH6ISZskwKr7/+N16P+28nfcJmpvr0tnAoGABO0r\nYIMiKaoQaQz8xBe/hnch+LKQA+F8T2o4M1GLgag37X8e7rIRRj6H6rQ4hG5lDKS9\nwDgxhXvVWq2CE9+GDwHzJn34K3ojzmbi4LVpqUYCOA//nyC+lxPjBKht6lYdRE3e\nl5HN3ONQopxYRBoD58Opw7lkW3HaTa3emhgOaFcCgYEAwVpNxzRRXV+00idNcfd7\nC0E2th/kJD0HzFRap09Js2/J/MJ1cN+GvouT2/yIKJ0bqzaqVSveao4v367IUcR7\nO2dsncWbNQnchunY4Gdg3GzJEkbwi9jMa4/40zKNIl79lyiakko4ZWyqiU/N+Uz2\npbm8vM8ej9HnXd07ViAgQx4=\n-----END PRIVATE KEY-----\n",


    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: "test1-604bd",
                clientEmail: "firebase-adminsdk-v3rrf@test1-604bd.iam.gserviceaccount.com",
                // https://stackoverflow.com/a/41044630/1332513
                privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
            }),
            databaseURL: "https://test1-604bd-default-rtdb.europe-west1.firebasedatabase.app",
        })
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error
        })
}