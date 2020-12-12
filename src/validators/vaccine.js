const Vaccine = require("../models/Vaccine")


const validatingRegister = async (vaccine, batch, dose) => {
    const validVaccine = await Vaccine.find({ $and: [{ vaccine: vaccine }, { batch: batch }, { dose: dose }] });
    return validVaccine.length
}

const searchingVaccineAndDose = async (vaccine, dose) => {
    const validatedVaccineDose = await Vaccine.find({ $and: [{ vaccine: vaccine }, { dose: dose }] });
    return validatedVaccineDose.length
}
const searchingVaccines = async (value) => {
    const validatedVaccine = await Vaccine.find({ vaccine: { $in: value } });
    return validatedVaccine.length
}

module.exports = {
    validatingRegister,
    searchingVaccineAndDose,
    searchingVaccines
}

