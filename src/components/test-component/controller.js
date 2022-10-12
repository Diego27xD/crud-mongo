import Student from "../../models/student";

export const findAll = async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      ok:true,
      data: students,
    })
  } catch (error) {
    res.json({
      ok:false,
      data: error.message,
    })
  }
}

export const create = async (req, res) => {
  try {
    const { body } = req;
    const user = new Student(body);
    user.save();

    res.json({
      ok: true,
      data: user,
    })
  } catch (error) {
    res.json({
      ok:false,
      data:error.message,
    })
  }
}
//? MÉTODO PARA ACTUALIZAR UN DOCUMENTO

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const dataUp = new Student(body);
    
    await Student.findOneAndUpdate({_id:id}, { $set: body})

    res.json({
      ok:true,
      message: "Documento actualizado satisfactoriamente",
      idUserUpdated: id,
      data: dataUp
    })
  } catch (error) {
    res.json({
      ok:false,
      error: error.message,
    })
  }
}
//? MÉTODO PARA ELIMINAR UN DOCUMENTO

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete({_id:id});

    res.json({
      ok:true,
      data: "Documento eliminado satisfactoriamente",
    })
  } catch (error) {
    res.json({
      ok:false,
      error: error.message,
    })
  }
}