function Student(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.attendance = [];
    this.grades = [];

    this.age = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };

    this.averageGrade = function (grades = this.grades) {
        return grades.reduce((acc, grade) => {
            acc += grade;
            return acc;
        }, 0) / grades.length;
    };

    this.present = function () {
        if (this.attendance.length < 10) {
            this.attendance.push(true);
        }
    };

    this.absent = function () {
        if (this.attendance.length < 10) {
            this.attendance.push(false);
        }
    };

    this.mark = function (grade) {
        if (grade >= 0 && grade <= 10 && this.grades.length < 10) {
            this.grades.push(grade);
        }
    };

    this.summary = function () {
        const averageAttendance = this.averageGrade(this.attendance);

        console.log(this.averageGrade(), averageAttendance);

        if (this.averageGrade() > 9 && averageAttendance > 0.9) {
            return 'Ути какой молодчинка!';
        }

        if (this.averageGrade() < 9 && averageAttendance < 0.9) {
            return 'Редиска!';
        }

        if (this.averageGrade() < 9 || averageAttendance < 0.9) {
            return 'Норм, но можно лучше';
        }
    };
}

const student1 = new Student('Taras', 'Shevchenko', '1814');
const student2 = new Student('Ivan', 'Franko', '1856');

function checkMethods(students) {
    let num = 4;

    students.forEach((st) => {
        if (st.name === 'Ivan') {
            num = 6;
        }
        console.log(st.name);
        console.log(st.surname);
        console.log('age', st.age());
        st.present();
        st.present();
        st.present();
        st.present();
        st.present();
        st.present();
        st.present();
        st.present();
        st.absent();
        st.absent();
        st.absent();
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        st.mark(num + 4);
        console.log('averageGrade', st.averageGrade());
        console.log('summary:', st.summary());
        console.log('- -- end st -- -');
    });
}

checkMethods([student1, student2]);

console.log(student1.grades);
console.log(student2.grades);



// Student.prototype.fullName = function () {
//     return this.surname + ' ' + this.name;
// };
//
// Student.prototype.sentEmail = function (text) {
//     return text + ' ' + ' send!';
// };