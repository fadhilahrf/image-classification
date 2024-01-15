package com.classification.app.service;

import org.datavec.image.loader.NativeImageLoader;
import org.deeplearning4j.nn.modelimport.keras.KerasModelImport;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;
import org.nd4j.linalg.api.ndarray.INDArray;
import org.nd4j.linalg.dataset.api.preprocessor.DataNormalization;
import org.nd4j.linalg.dataset.api.preprocessor.ImagePreProcessingScaler;
import org.nd4j.linalg.factory.Nd4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ClassificationService {
    
    public int classify(String modelName, MultipartFile imageFile) {
        INDArray result = null;
        INDArray idx = null;
        try {

            String fullModelPath = new ClassPathResource("models/" + modelName + ".h5").getFile().getAbsolutePath();

            MultiLayerNetwork model = KerasModelImport.importKerasSequentialModelAndWeights(fullModelPath, false);

            NativeImageLoader loader = new NativeImageLoader(128, 128, 3);

            INDArray image = loader.asMatrix(imageFile.getInputStream()).permute(0,2,3,1);

            DataNormalization scalar = new ImagePreProcessingScaler(0, 1);

            scalar.transform(image);
            result = model.output(image);

            idx = Nd4j.argMax(result, 1);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return idx.toIntVector()[0];
    }
}
