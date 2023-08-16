## [Demo App](https://demo-mrnp-jkj.vercel.app/)

## Technologies Used

1. [Tailwind](https://tailwindcss.com/docs/guides/nextjs)
2. [Prisma](https://www.prisma.io/nextjs)
3. [MongoDB](https://www.mongodb.com/docs/)
4. [Next.js](https://nextjs.org/docs)

## Getting Started

1. Clone the repository: `git clone https://github.com/JyotiJ-2021/todo-app-jk.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build: `npm run build`

## Description

This project was created for learning purposes, aiming to provide practical experience and insights into web developement. It utilizes the Next.js framework along with the App Router to demonstrate how to build dynamic and responsive web applications.

## api :

- app/api/contact
- app/api/login
- app/api/logout
- app/api/profile
- app/api/register

## page :

- app/about
- app/contact
- app/login
- app/posts
- app/profile
- app/register

## schema.prisma

- model Contact{
- id String @id @default(auto()) @map("\_id") @db.ObjectId
- name String?
- email String?
- message String?
- createdAt DateTime @default(now())
- updatedAt DateTime @updatedAt
- }

- model Users{
- id String @id @default(auto()) @map("\_id") @db.ObjectId
- name String?
- email String? @unique
- password String?
- gender String?
- state String?
- country String?
- contactNumber Int
- createdAt DateTime @default(now())
- updatedAt DateTime @updatedAt
- }

## Prisma Command

- npx prisma
- npx prisma init
- npx prisma generator
- npx prisma db push //to push your collection in mongodb

## your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
