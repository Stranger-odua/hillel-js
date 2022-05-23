function Student(name, surname, yearOfBirth) {
	this.name = name;
	this.surname = surname;
	this.yearOfBirth = yearOfBirth;
	this.attendance = ['', '', '', '', '', '', '', '', '', ''];
	this.grades = ['', '', '', '', '', '', '', '', '', ''];
}

Student.prototype.age = function () {
	return new Date().getFullYear() - this.yearOfBirth;
};

Student.prototype.averageGrade = function (grades = this.grades) {
	let gradesCount
	if (grades.indexOf('') !== -1) {
		gradesCount = grades.indexOf('')
	} else {
		gradesCount = grades.length
	}

	const totalGrades = grades.reduce((acc, grade) => {
		if (grade !== '') {
			acc += grade;
		}
		return acc;
	}, 0)

	return totalGrades / gradesCount
};

Student.prototype.present = function () {
	if (this.attendance.indexOf('') !== -1) {
		this.attendance[this.attendance.indexOf('')] = true;
	}
};

Student.prototype.absent = function () {
	if (this.attendance.indexOf('') !== -1) {
		this.attendance[this.attendance.indexOf('')] = false;
	}
};

Student.prototype.mark = function (grade) {
	if (this.grades.indexOf('') !== -1 && grade >= 0 && grade <= 10) {
		this.grades[this.grades.indexOf('')] = grade;
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

console.log('student1 ', student1);
console.log('student2 ', student2);

console.log(student1.surname);
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

console.log('-- -- -- -- -- -- -- -- -- -- -- --');

console.log(student2.surname);
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