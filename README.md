# 📋 TaskVision

[![TaskVision](/public/logo.svg)](https://github.com/MarkiyanCh1/taskvision)

TaskVision is a robust project management tool designed as a Trello clone. TaskVision utilizes a comprehensive tech stack, incorporating technologies such as Next.js 14 with server actions, Prisma, Stripe for payment integration, Tailwind CSS, Shadcn UI, Zustand for state management, and MySQL. Users can benefit from features like task management, customizable boards, user authentication and drag-and-drop functionality. The platform is specifically crafted to enhance team productivity through efficient project organization and communication.

## 🌐 Live Website

- The application is live and hosted on Vercel. You can access it [here](https://taskvision.vercel.app/).

## 📸 Screenshot

- Marketing Page
  ![Marketing Page](/public/marketing-screenshot.png)
- Main Page
  ![Main Page](/public/main-screenshot.png)
- Board Page
  ![Board Page](/public/board-screenshot.png)

## 🌟 Features

- Marketing Starting Page.
- Authorization with Clerk.
- Create and Customize Your Own Boards.
- Unsplash API for random beautiful cover images.
- Activity log for entire organization.
- Board rename and delete.
- List creation.
- List rename, delete, drag & drop reorder and copy.
- Card creation.
- Card description, rename, delete, drag & drop reorder and copy.
- Card activity log.
- Board limit for every organization.
- Stripe subscription for each organization to unlock unlimited boards.
- MySQL DB.
- Prisma ORM.
- ShadcnUI & TailwindCSS.

## 📄 Pages

1. **Marketing Page**: Starting page that serves for marketing purposes.
2. **Clerk Sign-In/Sign-Up Page**: Displays Clerk Sign-in or Sign-up form.
3. **Main User Page**: Displays User organizations and all boards.
4. **Board Page**: Displays all lists and tasks for Board.

## 🛠️ Technologies Used

- **NextJS 14**: A React framework for building server-rendered and static websites, offering features like routing, data fetching, and image optimization.
- **TypeScript**: A superset of JavaScript that adds optional static typing for better code maintainability and catching errors early.
- **TailwindCSS**: A utility-first CSS framework that provides a rapid way to style web applications.
- **Shadcn**: A collection of beautifully designed re-usable components that you can copy and paste into your apps.
- **Clerk**: Manages user authentication and authorization flows in your web applications.
- **Prisma**: A powerful ORM (Object-Relational Mapper) with an intuitive data model, automated migrations, type-safety, and auto-completion.
- **MySQL**: A widely-used, open-source relational database management system for structured data storage.
- **AIVEN**: A managed cloud service provider that offers various database solutions, including MySQL as a service.
- **Sonner**: A specialized JavaScript library for creating customizable and unobtrusive notification messages on websites.
- **Stripe**: A payment processing platform that allows you to integrate payments into your application.
- **Zod**: A type-safe data schema validation library for TypeScript that ensures data integrity and prevents errors by checking data against pre-defined rules.
- **Zustand**: A lightweight state management library for React applications that offers a simple API for managing application state in a centralized location.

## 🚀 Installation

To install and run this project locally on your machine, follow the steps below.

1. Clone the repository:

```bash
git clone https://github.com/MarkiyanCh1/taskvision.git
```

2. Navigate into the project directory:

```bash
cd taskvision
```

3. Install dependencies:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

**Setup Prisma**

Add MySQL Database (You can use PlanetScale but I used Aiven)

```bash
npx prisma generate
npx prisma db push
```

4. Start the application:

```bash
npm run dev
```

The application will start running on http://localhost:3000.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## If you find this project useful, please consider giving it a star ⭐. Your support is greatly appreciated!

Happy coding! 💻
