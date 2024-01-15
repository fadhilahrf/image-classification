package com.classification.app.web.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.classification.app.service.ClassificationService;

@RestController
@RequestMapping("/api/classification")
public class ClassificationResource {

    private final ClassificationService classificationService;

    ClassificationResource(ClassificationService classificationService){
        this.classificationService = classificationService;
    }

    @PostMapping("")
    public ResponseEntity<Integer> classify(@RequestParam("modelName") String modelName, @RequestParam("imageFile") MultipartFile imageFile) {
        return ResponseEntity.ok(classificationService.classify(modelName, imageFile));
    }
    
}
