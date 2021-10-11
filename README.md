# Seven Wanders

## Overview

Seven Wanders is a travel blog where users can find and read user-submitted travel stories. The landing page invites visitors to explore stories by continent or read one of a few "Featured Stories". Registered users can submit their own stories with a photo and edit their previous posts. The site is aimed at inspiring users to decide their next destination and (hopefully) to offer a recommendation based on their own travels.

## Wireframes

<details>
<summary>Home</summary>

![alt text](readme-assets/wireframes/Home.png)

</details>

<details>
<summary>Explore</summary>

![alt text](readme-assets/wireframes/Explore.png)

</details>

<details>
<summary>Detail</summary>

![alt text](readme-assets/wireframes/Detail.png)

</details>

<details>
<summary>Create</summary>

![alt text](readme-assets/wireframes/Create.png)

</details>

<details>
<summary>Edit</summary>

![alt text](readme-assets/wireframes/Edit.png)

</details>

<details>
<summary>Sign Up</summary>

![alt text](./readme-assets/wireframes/SignUp.png)

</details>

<details>
<summary>Sign In</summary>

![alt text](./readme-assets/wireframes/SignIn.png)

</details>

## Component Hierarchy

## Schemas

### Story schema

```
const Story = new Schema(
  {
    location: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    userID: { type: String, required: true }, //key to user in users table
    story: { type: String, required: true },
    imageURL: { type: String, required: true },
  },
  { timestamps: true }
);
```

### User schema

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
);
```

## Team Expectations

> [Read our team expectations manifesto here.](https://docs.google.com/document/d/1l8nFBRjAJudqV3y2pBvPw7_S7gMINpztjF4ZgiL9RvQ/edit?usp=sharing)

## MVP

#### Planning

- Team expectations
- README.md
- Component hierarchy
- Wireframes

#### Front end

- React app
- Use/render via API
- Use react-router
- Authentication

#### Back end

- Full CRUD via Express, Mongoose/MongoDB

#### Deployment

- Front end via Netlify
- Back end via Heroku
- MongoDB via MongoDB Atlas

## Post-MVP

## SWOT
