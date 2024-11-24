//package com.some.where.aop.camping;
//
//import com.some.where.aop.RequestContextHolder;
//import com.some.where.camping.service.CampingService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.aspectj.lang.JoinPoint;
//import org.aspectj.lang.ProceedingJoinPoint;
//import org.aspectj.lang.annotation.*;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//import java.util.UUID;
//
//@Slf4j
//@Aspect
////@Component
//@RequiredArgsConstructor
//public class CampingLogAspect4 {
//
//    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//
//    private final CampingService campingService;
//
//    @Around("com.some.where.aop.camping.CampingPointcuts.campingController()")
//    public Object printCampingControllerLog(ProceedingJoinPoint joinPoint) throws Exception {
//        Object[] args = joinPoint.getArgs();
//        try {
//
//            String uuid = UUID.randomUUID().toString().substring(0, 8);
//            log.info(uuid);
//            RequestContextHolder.setRequestId(uuid);
//            String now = LocalDateTime.now().format(formatter);
//            log.info("campingService={}",campingService.getClass());
//            log.info("[CampingController Start] [requestNumber = {}]]", uuid);
//            log.info("[CampingController] [Method = {}] [args = {}] [time ={}]", joinPoint.getSignature().getName(), args, now);
//
//            try {
//                return joinPoint.proceed();
//            } catch (Throwable e) {
//                throw new RuntimeException(e);
//            }
//
//        } catch (Exception e) {
//            throw e;
//        } finally {
//            String now = LocalDateTime.now().format(formatter);
//            log.info("[CampingController End] [requestNumber = {}] [time ={}]", RequestContextHolder.getRequestId(), now);
//            RequestContextHolder.clearRequestId();
//        }
//    }
//
//    @Around("com.some.where.aop.camping.CampingPointcuts.campingService()")
//    public Object printCampingServiceLog(ProceedingJoinPoint joinPoint) {
//        Object[] args = joinPoint.getArgs();
//        try {
//            try {
//                String now = LocalDateTime.now().format(formatter);
//                log.info("[CampingService] [requestNumber = {}] [Method = {}] [args = {}] [time ={}]",
//                        RequestContextHolder.getRequestId(), joinPoint.getSignature().getName(), args, now);
//                return joinPoint.proceed();
//            } catch (Throwable e) {
//                throw new RuntimeException(e);
//            }
//        } finally {
//
//        }
//    }
//
//}
