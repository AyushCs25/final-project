package in.ayushweb.gymfoodapi.repository;

import in.ayushweb.gymfoodapi.entity.FoodEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepositary extends MongoRepository<FoodEntity,String> {
}
