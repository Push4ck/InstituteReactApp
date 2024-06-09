const InstituteSoft = {
  BaseURL: "https://localhost:7193",

  // classroom api
  ClassRoom: {
    // get method
    GetActiveClassRoom: "/api/ClassRoom/GetActiveClassRoom",
    GetActiveClass: "/api/ClassRoom/GetActiveClass",
    GetActiveClassRoomType: "/api/ClassRoom/GetActiveClassRoomType",

    // post method
    SetClassRoom: "/api/ClassRoom/SetClassRoom",

    // delete classroom
    DeleteClassRoom: "/api/ClassRoom/DeleteClassRoom?ClassRoomId={0}",

    // edit classroom
    EditClassRoom: "/api/ClassRoom/EditClassRoom?ClassRoomId={0}",
  },

  // student api
  Student: {
    // get method
    GetActiveStudent: "/api/Student/GetActiveStudent",

    // post method
    SetStudent: "/api/Student/SetStudent",

    // delete student
    DeleteStudent: "/api/Student/DeleteStudent?StudentId={0}",
  },
};

export default InstituteSoft;
