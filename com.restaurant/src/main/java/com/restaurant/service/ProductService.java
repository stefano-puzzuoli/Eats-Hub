package com.restaurant.service;

import com.restaurant.wrapper.ProductWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface ProductService {

    ResponseEntity<String> addNewProduct(Map<String, String> requestMap);

    ResponseEntity<List<ProductWrapper>> getAllProducts();

    ResponseEntity<String> updateProduct(Map<String, String> requestMap);
}
