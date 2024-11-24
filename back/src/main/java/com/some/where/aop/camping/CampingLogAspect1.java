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
//import java.util.UUID;
//
//@Slf4j
//@Aspect
//public class CampingLogAspect1 {
//
//    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//    @AfterReturning("com.some.where.aop.camping.CampingPointcuts.campingController()")
//    public void printCampingControllerLog(JoinPoint joinPoint) {
//        Object[] args = joinPoint.getArgs();
//        String uuid = UUID.randomUUID().toString().substring(0, 8);
//        log.info(uuid);
//        RequestContextHolder.setRequestId(uuid);
//        String now = LocalDateTime.now().format(formatter);
//
//        log.info("[CampingController Start] [requestNumber = {}]]", uuid);
//        log.info("[CampingController] [Method = {}] [args = {}] [time ={}]", joinPoint.getSignature().getName(), args, now);
//    }
//
//}
