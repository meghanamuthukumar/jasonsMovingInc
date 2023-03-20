package com.jason.moving;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = "com.jason.moving")
@SpringBootApplication
public class MovingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovingApplication.class, args);
	}

}
