package com.classification.app.service.dto;

import org.springframework.web.multipart.MultipartFile;

public class ClassificationDto {
    private String modelName;
    private MultipartFile imageFile;
    private Long inputSize;
    private Long channel;

    public String getModelName() {
        return modelName;
    }
    public void setModelName(String modelName) {
        this.modelName = modelName;
    }
    public MultipartFile getImageFile() {
        return imageFile;
    }
    public void setImageFile(MultipartFile imageFile) {
        this.imageFile = imageFile;
    }
    public Long getInputSize() {
        return inputSize;
    }
    public void setInputSize(Long inputSize) {
        this.inputSize = inputSize;
    }
    public Long getChannel() {
        return channel;
    }
    public void setChannel(Long channel) {
        this.channel = channel;
    }

}
