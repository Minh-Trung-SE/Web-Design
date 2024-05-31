import ConsultationRequest, { ConsultationRequestAttributes, ConsultationRequestCreationAttributes} from "@src/database/models/ConsultationRequest/Model";


(
    async () => {
        const models = [
            ConsultationRequest
        ]
        for (const model of models) {
            await model.sync({force: true})
        }
    }
)()

export {
    ConsultationRequest
}

export type {
    ConsultationRequestAttributes,
    ConsultationRequestCreationAttributes
}

