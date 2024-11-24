//package com.some.where.aop.camping;
//
//import com.some.where.aop.RequestContextHolder;
//import lombok.extern.slf4j.Slf4j;
//import org.aspectj.lang.JoinPoint;
//import org.aspectj.lang.annotation.After;
//import org.aspectj.lang.annotation.Aspect;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//
//@Slf4j
//@Aspect
//public class CampingLogAspect3 {
//    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//
//    @After("com.some.where.aop.camping.CampingPointcuts.campingController()")
//    public void afterCampingControllerLog(JoinPoint joinPoint) {
//        String now = LocalDateTime.now().format(formatter);
//        log.info("[CampingController End] [requestNumber = {}] [time ={}]", RequestContextHolder.getRequestId(), now);
//        RequestContextHolder.clearRequestId();
//    }
//
//}
