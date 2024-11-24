package com.some.where.common.exception.custom;

import org.springframework.http.HttpStatus;

public interface ErrorType {
    HttpStatus getStatusCode();
    String getCode();
    String getMessage();
}
