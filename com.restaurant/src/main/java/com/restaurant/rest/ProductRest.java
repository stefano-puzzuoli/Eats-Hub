package com.restaurant.rest;

import com.restaurant.wrapper.ProductWrapper;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

@RequestMapping(path = "/product")
public interface ProductRest {

    @PostMapping(path = "/add")
    ResponseEntity<String> addNewProduct(@RequestBody(required = true) Map<String, String> requestMap);

    @GetMapping(path = "get")
    ResponseEntity<List<ProductWrapper>> getAllProducts();

    @PostMapping(path = "/update")
    ResponseEntity<String> updateProduct(@RequestBody(required = true) Map<String, String> requestMap);

}
