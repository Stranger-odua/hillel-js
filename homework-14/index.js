function Student(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.attendance = [];
    this.grades = [];

    this.age = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };

    this.averageGrade = function (grades=this.grades) {
        return grades.reduce((acc, grade) => {
            acc += grade;
            return acc;
        }, 0) / grades.length;
    };

    this.present = function () {
        if (this.attendance.length <= 10) {
            this.attendance[this.attendance.length] = true;
        }
    };

    this.absent = function () {
        if (this.attendance.length < 10) {
            this.attendance[this.attendance.length] = false;
        }
    };

    this.mark = function (grade) {
        if (grade >= 0 && grade <= 10 && this.grades.length < 10) {
            this.grades[this.grades.length] = grade;
        }
    };

    this.summary = function () {
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
}


const student1 = new Student('Taras', 'Shevchenko', '1814');
const student2 = new Student('Ivan', 'Franko', '1856');

console.log(student1.surname);
console.log('age', student1.age());
student1.absent();
student1.absent();
student1.mark(8);
student1.mark(8);
console.log('averageGrade', student1.averageGrade());
console.log('attendance', student1.attendance);
console.log('summary:', student1.summary());

console.log('-- -- -- -- -- -- -- -- -- -- -- --');

console.log(student2.surname);
console.log('age', student2.age());
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.mark(10);
student2.mark(10);
console.log('averageGrade', student2.averageGrade());
console.log('attendance', student2.attendance);
console.log('summary:', student2.summary());