package com.some.where.common.response;


import com.some.where.common.exception.custom.ErrorData;
import com.some.where.common.exception.custom.ErrorType;

public class ErrorResponse extends ApiResponse<ErrorData> {

    public ErrorResponse(ErrorType errorCode) {
        super(errorCode);
    }
    public ErrorResponse(ErrorType errorCode, ErrorData errorData) {
        super(errorCode, errorData);
    }

}
