import httpStatus from 'http-status';
import { Error } from 'mongoose';
import { IErrorSources, IGenericError } from '../interface/error';

const handleCastError = (error: Error.CastError): IGenericError => {
    const statusCode = httpStatus.BAD_REQUEST;
    const message = 'Invalid Id';
    const errorSources: IErrorSources[] = [
        {
            path: error.path,
            message: error.message,
        },
    ];

    return {
        statusCode,
        message,
        errorSources,
    };
};

export default handleCastError;
