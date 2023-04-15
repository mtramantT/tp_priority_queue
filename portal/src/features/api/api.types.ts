// Create a DTO for the parent wrapper object
export interface IApiWrapper<T> {
    data: T[];
    message: string;
    statusCode: number;
}
