const { find, filter } = require("lodash");

const Courses = [
  {
    id: "1",
    title: "Programming",
    professor: "Carlos",
    description: "asd",
    topic: "Software",
  },
  {
    id: "2",
    title: "Programming",
    professor: "Pablo",
    description: "asd",
    topic: "Software",
  },
  {
    id: "3",
    title: "Database",
    professor: "Yogledis",
    description: "asd",
    topic: "Database",
  },
];

module.exports = {
  Query: {
    // getCourse: ({ id }) => {
    //   return Courses.filter((course) => {
    //     if (course.id == id) {
    //       return course;
    //     }
    //   });
    // },
    getCourses: () => Courses,
    getCourses2: (_, { title }) => filter(Courses, { title }),
    getCourse: (_, { id }) => find(Courses, { id }),
  },

  Mutation: {
    createCourse: (_, { input }) => {
      Courses.push(input);
      return Courses;
    },

    updateCourse: ({id, input}) => {
      find(Courses, { id })
      // queryDB(req, "update users SET ? where id = ?", [args, args.id]).then(
      //   (data) => data
      // ),
      console.log(args);
      console.log(req);
    },

    deleteCourse: (args, req) => {
      // queryDB(req, "delete from users where id = ?", [args.id]).then(
      //   (data) => data
      // ),
      console.log(args);
      console.log(req);
    },
  },
};
