const Courses = [
  {
    _id: "1",
    title: "Programming",
    professor: "Carlos",
    description: "asd",
    topic: "Software",
  },
  {
    _id: "2",
    title: "Programming",
    professor: "Pablo",
    description: "asd",
    topic: "Software",
  },
  {
    _id: "3",
    title: "Database",
    professor: "Yogledis",
    description: "asd",
    topic: "Database",
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return Courses;
    },
  },
};
