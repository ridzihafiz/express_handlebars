import { request, response } from "express";

export const about_controller = (req = request, res = response) => {
  const data = [
    {
      id: 1,
      title: "1st title",
      content: "first content",
    },
    {
      id: 2,
      title: "2nd title",
      content: "second content",
    },
    {
      id: 3,
      title: "3rd title",
      content: "third content",
    },
    {
      id: 4,
      title: "4th title",
      content: "fourth content",
    },
  ];
  return res.render("about", {
    title: "About Page",
    description: "This is about page",
    data: data,
  });
};
