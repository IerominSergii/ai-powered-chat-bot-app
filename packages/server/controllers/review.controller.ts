import { type Request, type Response } from 'express';
import { reviewService } from '../services/review.service';

export const reviewsController = {
  async getReviews(req: Request, res: Response) {
    const productId = Number(req.params.id);

    if (isNaN(productId)) {
      res.status(400).json({ error: 'Invalid product ID' });
      return;
    }

    // SELECT * FROM reviews WHERE productId = @productId ORDER BY createdAt DESC
    const reviews = await reviewService.getReviews(productId);

    res.json(reviews);
  },

  async summarizeReviews(req: Request, res: Response) {
    const productId = Number(req.params.id);

    if (isNaN(productId)) {
      res.status(400).json({ error: 'Invalid product ID' });
      return;
    }

    const summary = await reviewService.summarizeReviews(productId);

    res.json({ summary });
  },
};
