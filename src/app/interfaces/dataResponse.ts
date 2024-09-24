export class DataResponse {
    status: boolean
    message?: string

    constructor() {
        this.status = false,
        this.message = ''
    }
}
