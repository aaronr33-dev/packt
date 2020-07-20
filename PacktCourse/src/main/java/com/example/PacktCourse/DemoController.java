package com.example.PacktCourse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @RequestMapping("/")
    public String helloMessage(){
        return "Hello World!";
    }


}
