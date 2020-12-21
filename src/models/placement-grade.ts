export class PlacementGrade {
    StudentName: string;
    Reading: number;
    Writing: number;
    Listening: number;
    Speaking: number;

    constructor(StudentName: string, Reading: number, Writing: number, Listening: number, Speaking: number) {
        this.StudentName = StudentName;
        this.Reading = Reading;
        this.Writing = Writing;
        this.Listening = Listening;
        this.Speaking = Speaking;
    }
}