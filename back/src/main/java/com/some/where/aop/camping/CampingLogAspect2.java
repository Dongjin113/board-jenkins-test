//package com.some.where.aop.camping;
//
//import com.some.where.aop.RequestContextHolder;
//import lombok.extern.slf4j.Slf4j;
//import org.aspectj.lang.JoinPoint;
//import org.aspectj.lang.annotation.After;
//import org.aspectj.lang.annotation.AfterReturning;
//import org.aspectj.lang.annotation.Aspect;
//import org.aspectj.lang.annotation.Before;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//
//@Slf4j
//@Aspect
//public class CampingLogAspect2 {
//
//    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//
//    @After("com.some.where.aop.camping.CampingPointcuts.campingService()")
//    public void printCampingServiceLog(JoinPoint joinPoint) {
//        Object[] args = joinPoint.getArgs();
//        String now = LocalDateTime.now().format(formatter);
//        log.info("[CampingService] [requestNumber = {}] [Method = {}] [args = {}] [time ={}]",
//                RequestContextHolder.getRequestId(), joinPoint.getSignature().getName(), args, now);
//    }
//}
