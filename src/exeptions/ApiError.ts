export default class ApiError extends Error {
    readonly status;
    readonly errors;

    constructor(status: number, message: string, errors?: any[]) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static Unauthorized() {
        return new ApiError(401, 'Пользователь не авторизован!');
    }

    static BadRequest(message: string, errors?: any[]) {
        return new ApiError(400, message, errors);
    }

    static Forbidden() {
        return new ApiError(403, 'Forbidden');
     }

    static Internal() {
        return new ApiError(500, 'Internal');
    }
}