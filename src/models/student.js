import mongoose from "mongoose";

const studentSchema = new mongoose.Schema ({
  name: String,
  lastname: String,
  email: String,
  dni: String,
  address: String,
  phone: String,
  status: Boolean  
});

const Student  = mongoose.model("Student", studentSchema);

export default Student;