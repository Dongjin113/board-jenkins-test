package com.some.where.common.exception.custom;

import lombok.Getter;

@Getter
public abstract class CustomException extends RuntimeException {

    private final ErrorType errorType;
    private ErrorData errorData;

    public CustomException(
            ErrorCode errorCode
    ) {
        super(errorCode.getMessage());
        this.errorType = errorCode;
    }

    public CustomException(
            ErrorCode errorCode,
            String message
    ) {
        super(errorCode.changeMessage(message).getMessage());
        this.errorType = errorCode.changeMessage(message);
    }

    public CustomException(
            ErrorCode errorCode,
            ErrorData errorData
    ) {
        super(errorCode.getMessage());
        this.errorType = errorCode;
        this.errorData = errorData;
    }
}
