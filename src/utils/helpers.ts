export const transformTeacherData = data => {
  return data?.reduce((acc, teacherData) => {
    const {faculty, ...teacher} = teacherData;
    const existedFaculty = acc.findIndex(item => item.id === faculty.id);
    if (existedFaculty === -1) {
      acc.push({id: faculty.id, name: faculty.name, teachers: [teacher]});
    } else {
      acc[existedFaculty].teachers.push(teacher);
    }
    return acc;
  }, []);
};

// if (searchValue.length) {
//   const checkSearch = new RegExp(searchValue, 'gi');
//   facultyTeachers = facultyTeachers.filter(f =>
//     f.teachers.some(teacher =>
//       checkSearch.test(teacher.firstName + teacher.lastName),
//     ),
//   );
// }
