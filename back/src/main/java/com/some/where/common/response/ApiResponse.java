package com.some.where.common.response;

import com.some.where.common.exception.custom.ErrorType;
import com.some.where.common.response.dto.Status;
import lombok.Getter;

@Getter
public class ApiResponse<T> {

    private Status status;
    private T data;

    public ApiResponse(ErrorType errorCode) {
        this.status = new Status(errorCode);
    }

    public ApiResponse(ErrorType errorCode, T data) {
        this.status = new Status(errorCode);
        this.data = data;
    }
}
