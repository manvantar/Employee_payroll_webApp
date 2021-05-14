class EmployeePayrollData {
    
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = _startDate;
    }

    /*ToString method which is used to return toString method
    * return id,name,gender,profilePic,department,salary,startDate,notes
    */   
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocalDateString("en-US", options);
        return "id=" + this._id + ",name ='" + this._name + "', gender= '" + this._gender +
            ", profilePic= '" + this.profilePic + ", department=" + this._department +
            ", salary= " + this._salary + ", startDate= " + empDate + ", notes=" + this._note;
    }

}