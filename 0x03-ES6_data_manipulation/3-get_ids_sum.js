/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: NUmber,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Juru Jean Lionel <https://github.com/lioneljuru>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
	if (students instanceof Array) {
		return students.reduce(
			(prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
			0,
		);
	}
	return 0;
}
