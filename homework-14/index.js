function Student(name, surname, yearOfBirth) {
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;
	this.attendance = new Array(10);
	this.marks = new Array(10);
}

Student.prototype.age = function () {
	return new Date().getFullYear() - this.yearOfBirth;
};

Student.prototype.averageGrade = function (grades = this.marks) {
	let gradesCount = 0;

	return grades.reduce((acc, el) => {
		if (el !== undefined) {
			++gradesCount;
			acc += el
		}
		return acc

	}, 0) / gradesCount
};

Student.prototype.present = function () {
	if (this.attendance.findIndex((el) => el === undefined) !== -1) {
		this.attendance[this.attendance.findIndex((el) => el === undefined)] = true
	}
};

Student.prototype.absent = function () {
	if (this.attendance.findIndex((el) => el === undefined) !== -1) {
		this.attendance[this.attendance.findIndex((el) => el === undefined)] = false
	}
};

Student.prototype.mark = function (mark) {
	if (this.marks.findIndex((el) => el === undefined) !== -1) {
		this.marks[this.marks.findIndex((el) => el === undefined)] = mark
	}
};

Student.prototype.summary = function () {
	const averageAttendance = this.averageGrade(this.attendance);

	if (this.averageGrade() > 9 && averageAttendance > 0.9) {
		return 'Ути какой молодчинка!';
	}
	// больше либо равно использую умышленно, чтобы обработать все варианты оценок/посещений
	if (this.averageGrade() <= 9 && averageAttendance <= 0.9) {
		return 'Редиска!';
	}

	if (this.averageGrade() <= 9 || averageAttendance <= 0.9) {
		return 'Норм, но можно лучше';
	}
};


const student1 = new Student('Taras', 'Shevchenko', '1814');
const student2 = new Student('Ivan', 'Franko', '1856');

console.log(student1.name, student1.surname);
console.log('age', student1.age());
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.absent();
student1.absent();
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
student1.mark(8);
console.log('averageGrade', student1.averageGrade());
console.log('summary:', student1.summary());
console.log('student1 ', student1);

console.log('-- -- -- -- -- -- -- -- -- -- -- --');

console.log(student2.name, student2.surname);
console.log('age', student2.age());
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(8);
console.log('averageGrade', student2.averageGrade());
console.log('summary:', student2.summary());
console.log('student2 ', student2);