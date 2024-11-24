//package com.some.where.aop.camping;
//
//import com.some.where.aop.RequestContextHolder;
//import com.some.where.aop.camping.annotation.CampingControllerLog;
//import com.some.where.aop.camping.annotation.CampingServiceLog;
//import com.some.where.camping.service.CampingService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.aspectj.lang.ProceedingJoinPoint;
//import org.aspectj.lang.annotation.Around;
//import org.aspectj.lang.annotation.Aspect;
//import org.springframework.stereotype.Component;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//import java.util.UUID;
//
//@Slf4j
//@Aspect
//@Component
//@RequiredArgsConstructor
//public class CampingServiceLogAspect {
//
//    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//
//    private final CampingService campingService;
//
//    @Around("@annotation(campingControllerLog)")
//    public Object printCampingControllerLog(ProceedingJoinPoint joinPoint, CampingControllerLog campingControllerLog) throws Exception {
//        Object[] args = joinPoint.getArgs();
//        try {
//
//            String uuid = UUID.randomUUID().toString().substring(0, 8);
//            RequestContextHolder.setRequestId(uuid);
//            String now = LocalDateTime.now().format(formatter);
////            log.info("[CampingController Start] [requestId = {}]] [requestNum = {}] [Method = {}] [args = {}] [time ={}]", uuid, RequestContextHolder.getRequestNum(),joinPoint.getSignature().getName(), args, now);
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
//            log.info("[CampingController End] [requestId = {}] [time ={}]", RequestContextHolder.getRequestId(), now);
//            RequestContextHolder.clearRequestId();
//        }
//    }
//
//    @Around("@annotation(campingServiceLog)")
//    public Object printCampingServiceLog(ProceedingJoinPoint joinPoint, CampingServiceLog campingServiceLog) {
//        Object[] args = joinPoint.getArgs();
//        try {
//            String now = LocalDateTime.now().format(formatter);
////            log.info("[CampingService][requestId = {}] [requestNum = {}]  [Method = {}] [args = {}] [time ={}]",
////                    RequestContextHolder.getRequestId(),RequestContextHolder.getRequestNum(), joinPoint.getSignature().getName(), args, now);
//            return joinPoint.proceed();
//        } catch (Throwable e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//}
