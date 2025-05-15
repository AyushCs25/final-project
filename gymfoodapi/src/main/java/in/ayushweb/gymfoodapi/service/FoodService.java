package in.ayushweb.gymfoodapi.service;

import in.ayushweb.gymfoodapi.Io.FoodRequest;
import in.ayushweb.gymfoodapi.Io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {

    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> readFoods();

    FoodResponse readFood(String id);

    boolean deleteFile(String filename);

    void deleteFood(String id);
}
