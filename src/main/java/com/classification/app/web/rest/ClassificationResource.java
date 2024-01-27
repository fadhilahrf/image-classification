package com.classification.app.web.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.classification.app.service.ClassificationService;
import com.classification.app.service.dto.ClassificationDto;

@RestController
@RequestMapping("/api/classification")
public class ClassificationResource {

    private final ClassificationService classificationService;

    ClassificationResource(ClassificationService classificationService){
        this.classificationService = classificationService;
    }

    @PostMapping("")
    public ResponseEntity<Integer> classify(@ModelAttribute ClassificationDto classificationDto) {
        return ResponseEntity.ok(classificationService.classify(classificationDto));
    }
    
}
