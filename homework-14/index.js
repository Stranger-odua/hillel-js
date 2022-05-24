function Student(name, surname, yearOfBirth) {
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;
	this.attendance = [];
	this.attendance.length = 10;
	this.grades = [];
	this.grades.length = 10;
}

Student.prototype.age = function () {
	return new Date().getFullYear() - this.yearOfBirth;
};

Student.prototype.averageGrade = function (grades = this.grades) {
	let gradesCount = 0;
	let gradesTotalValue = 0;

	for (let i = 0; i < grades.length; i++) {

		if (grades[i] !== undefined) {
			++gradesCount;
			gradesTotalValue += grades[i];
		}
	}

	return gradesTotalValue / gradesCount;
};

Student.prototype.present = function () {
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i] === undefined) {
			this.attendance[i] = true;
			break;
		}
	}
};

Student.prototype.absent = function () {
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i] === undefined) {
			this.attendance[i] = false;
			break;
		}
	}
};

Student.prototype.mark = function (grade) {
	for (let i = 0; i < this.grades.length; i++) {
		if (this.grades[i] === undefined && grade >= 0 && grade <= 10) {
			this.grades[i] = grade;
			break;
		}
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
student1.absent();
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
student2.mark(7);
console.log('averageGrade', student2.averageGrade());
console.log('summary:', student2.summary());
console.log('student2 ', student2);