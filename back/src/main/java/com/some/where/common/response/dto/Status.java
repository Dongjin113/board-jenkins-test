package com.some.where.common.response.dto;


import com.some.where.common.exception.custom.ErrorType;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Status {
    private String code;
    private String message;

    public Status(ErrorType errorCode) {
        this.code = errorCode.getCode();
        this.message = errorCode.getMessage();
    }
}
