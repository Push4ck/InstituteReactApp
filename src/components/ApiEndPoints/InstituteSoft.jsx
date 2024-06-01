const InstituteSoft = {
  BaseURL: "https://localhost:7193",

  // class room api
  ClassRoom: {
    // get method
    GetActiveClassRoom: "/api/ClassRoom/GetActiveClassRoom",
    GetActiveClass: "/api/ClassRoom/GetActiveClass",
    GetActiveClassRoomType: "/api/ClassRoom/GetActiveClassRoomType",

    // post method
    SetClassRoom: "/api/ClassRoom/SetClassRoom",

    // deleted Classroom
    DeleteClassRoom: "/api/ClassRoom/DeleteClassRoom",
  },

  // student api
  Student: {
    GetActiveStudent: "/api/Student/GetActiveStudent",
  },
};

export default InstituteSoft;
