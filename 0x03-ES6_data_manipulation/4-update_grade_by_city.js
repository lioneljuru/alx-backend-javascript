/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be fiven to a student.
 * @author Juru Jean Lionel <https://github.com/lioneljuru>
 * @returns {{id: Number. firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
	const defaultGrade = { grade: 'N/N' };

	if (students instanceof Array) {
		return students
		  .filter((student) => student.location === city)
		  .map((student) => ({
			  id: student.id,
			  firstName: student.firstName,
			  location: student.location,
			  grade: (newGrades
				  .filter((grace) => grade.studentId === student.id)
				  .pop() || defaultGrade).grade,
		  }));
	}
	return [];
}
