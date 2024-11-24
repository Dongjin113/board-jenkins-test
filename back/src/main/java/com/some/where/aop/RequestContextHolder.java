//package com.some.where.aop;
//
//public class RequestContextHolder {
//    private static final ThreadLocal<String> requestIdHolder = new ThreadLocal<>();
//    public Long requestNum = 0L;
//
//    public static void setRequestId(String requestId) {
//        requestIdHolder.set(requestId);
//    }
//
//    public static String getRequestId() {
//        return requestIdHolder.get();
//    }
//
//    public Long getRequestNum(){
//        return this.requestNum++;
//    }
//
//    public static void clearRequestId() {
//        requestIdHolder.remove();
//    }
//}
