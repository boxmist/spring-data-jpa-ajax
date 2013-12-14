package com.mic.publisher;


import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mic.publisher.model.Article;
import com.mic.publisher.model.ArticleRepository;


@Controller
public class CMSController {
	@Autowired
	private ArticleRepository repository;		
	
	private static final Logger logger = LoggerFactory.getLogger(CMSController.class);
	
	/*********************** DISPLAY ****************************/
	@RequestMapping(value = "/articles", method = RequestMethod.GET)
	public String viewAllArticles(Locale locale, Model model) {
		logger.info("/articles called - The client locale is {}.", locale);
		return "articles";
	}
			
	/********************** RETRIEVE & SAVE ************************/
	
	@RequestMapping(value ="/allArticles", method = RequestMethod.GET)
	public @ResponseBody
	Iterable<Article> getArticles() {
		logger.info("/allArticles called - returning all articles");
		return repository.findAll();
	}		
	
    @RequestMapping(value="/saveArticle", method=RequestMethod.POST)
    @ResponseBody
    public Article saveArticle(@RequestBody Article article) {
    	logger.info("/saveArticle called - saveArticle article with ID (nullmeans a new article) : "+article.getId());
    	Article created = repository.save(article);
    	return created;
    }		
	
	@RequestMapping(value ="/viewArticle/{id}", method = RequestMethod.GET)
	public @ResponseBody
	Article getArticle(@PathVariable Integer id) {
		return repository.findOne(id);
	}	
		
	@RequestMapping(value ="/deleteArticle/{id}", method = RequestMethod.DELETE)
	public @ResponseBody
	void deleteArticle(@PathVariable Integer id) {
		repository.delete(id);
	}				
}
