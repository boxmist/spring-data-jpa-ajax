package com.mic.publisher;

import static org.junit.Assert.assertTrue;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;
import com.mic.publisher.model.Article;
import com.mic.publisher.model.ArticleRepository;

@RunWith(MockitoJUnitRunner.class)
public class CMSControllerTest {
	
	@Mock
	ArticleRepository repository;
	
	@InjectMocks 
	CMSController cmsController = new CMSController();
	
	Article articleOne = new Article();

	@Before
	public void setUp() throws Exception {		
		MockitoAnnotations.initMocks(this);		
	}

	@Test
	public void testGetArticle() {
		Mockito.when(repository.findOne(articleOne.getId())).thenReturn(articleOne);
		Article articleReturned = cmsController.getArticle(articleOne.getId());		
		assertTrue(articleReturned.equals(articleOne));
		Mockito.verify(repository).findOne(articleOne.getId());
	}

}
